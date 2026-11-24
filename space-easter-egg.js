(() => {
  const footer = document.querySelector('footer');
  if (!footer) return;

  // Turn only the visible word “Copyright” into the discreet trigger.
  const walker = document.createTreeWalker(footer, NodeFilter.SHOW_TEXT);
  let copyrightText;
  while ((copyrightText = walker.nextNode())) {
    if (copyrightText.nodeValue.includes('Copyright')) break;
  }
  if (!copyrightText) return;

  const before = copyrightText.nodeValue.split('Copyright')[0];
  if (before) copyrightText = copyrightText.splitText(before.length);
  copyrightText.splitText('Copyright'.length);
  const trigger = document.createElement('button');
  trigger.id = 'aether-copyright-trigger';
  trigger.type = 'button';
  trigger.setAttribute('aria-label', 'Copyright — reveal the space easter egg');
  trigger.textContent = 'Copyright';
  copyrightText.replaceWith(trigger);

  const stars = document.createElement('canvas');
  stars.id = 'aether-space-stars';
  stars.setAttribute('aria-hidden', 'true');
  document.body.append(stars);

  const exit = document.createElement('button');
  exit.id = 'aether-space-exit';
  exit.type = 'button';
  exit.setAttribute('aria-label', 'Exit space theme');
  exit.innerHTML = 'Back to earth&nbsp; ×';
  document.body.append(exit);

  const flyer = document.createElement('div');
  flyer.id = 'aether-sushi-flight';
  flyer.setAttribute('aria-hidden', 'true');
  flyer.innerHTML = `
    <canvas id="aether-sushi-canvas"></canvas>
    <svg id="aether-sushi-fallback" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="64" cy="82" rx="43" ry="24" fill="#fffaf0"/>
      <path d="M26 68c5-24 21-39 43-37 21 2 34 19 35 39-18 10-54 11-78-2Z" fill="#f58250"/>
      <path d="M43 46c4-5 9-8 15-10m1 29c6-12 17-19 29-22m-16 29c8-10 18-14 29-15" fill="none" stroke="#ffd0aa" stroke-width="5" stroke-linecap="round"/>
      <circle cx="52" cy="72" r="3" fill="#27303a"/><circle cx="76" cy="72" r="3" fill="#27303a"/>
      <path d="M59 81q7 7 14 0" fill="none" stroke="#bd6953" stroke-width="2" stroke-linecap="round"/>
      <path d="m31 74-11 7 11 4m64-9 12 6-11 6" fill="#fffaf0" stroke="#e5ded1" stroke-width="2" stroke-linejoin="round"/>
    </svg>`;
  document.body.append(flyer);

  const context = stars.getContext('2d');
  let starPoints = [];
  let active = false;
  let animationFrame = 0;
  let flightStartedAt = 0;
  let modelStarted = false;

  function drawStars() {
    const scale = Math.min(window.devicePixelRatio || 1, 2);
    stars.width = innerWidth * scale;
    stars.height = innerHeight * scale;
    context.setTransform(scale, 0, 0, scale, 0, 0);
    starPoints = Array.from({ length: 105 }, () => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
      radius: 0.35 + Math.random() * 1.05,
      alpha: 0.12 + Math.random() * 0.36,
    }));
    context.clearRect(0, 0, innerWidth, innerHeight);
    for (const star of starPoints) {
      context.fillStyle = `rgba(190, 211, 250, ${star.alpha})`;
      context.beginPath();
      context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      context.fill();
    }
  }

  function fly() {
    if (!active) return;
    const elapsed = (performance.now() - flightStartedAt) / 1000;
    const time = performance.now() / 1000;
    flyer.style.left = `${((elapsed * 78 + 240) % (innerWidth + 410)) - 220}px`;
    flyer.style.top = `${innerHeight * 0.24 + Math.sin(time * 0.9) * innerHeight * 0.22}px`;
    flyer.style.transform = `rotate(${Math.sin(time * 0.9) * 9}deg)`;
    animationFrame = requestAnimationFrame(fly);
  }

  function setSpace(enabled) {
    active = enabled;
    document.body.classList.toggle('aether-space', enabled);
    if (enabled) {
      if (!animationFrame) {
        flightStartedAt = performance.now();
        fly();
      }
      loadModel();
    } else {
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    }
  }

  trigger.addEventListener('click', () => setSpace(!active));
  exit.addEventListener('click', () => setSpace(false));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && active) setSpace(false);
  });
  window.addEventListener('resize', drawStars);
  drawStars();

  async function loadModel() {
    if (modelStarted) return;
    modelStarted = true;
    try {
      const THREE = await import('https://esm.sh/three@0.170.0');
      const { GLTFLoader } = await import('https://esm.sh/three@0.170.0/examples/jsm/loaders/GLTFLoader.js');
      const canvas = document.getElementById('aether-sushi-canvas');
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
      renderer.setSize(150, 150, false);
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
      camera.position.set(0, 0, 4);
      scene.add(new THREE.HemisphereLight(0xffffff, 0x929eb5, 2));
      const light = new THREE.DirectionalLight(0xffffff, 2);
      light.position.set(3, 4, 5);
      scene.add(light);

      new GLTFLoader().load('https://www.noggles.online/models/sushi.glb', gltf => {
        const sushi = gltf.scene;
        scene.add(sushi);
        const bounds = new THREE.Box3().setFromObject(sushi);
        const size = bounds.getSize(new THREE.Vector3());
        sushi.position.sub(bounds.getCenter(new THREE.Vector3()));
        sushi.scale.setScalar(1.62 / Math.max(size.x, size.y, size.z));

        const mixer = gltf.animations.length ? new THREE.AnimationMixer(sushi) : null;
        if (mixer) gltf.animations.forEach(clip => mixer.clipAction(clip).play());
        const clock = new THREE.Clock();
        function render() {
          if (!active) return;
          requestAnimationFrame(render);
          if (mixer) mixer.update(clock.getDelta());
          sushi.rotation.y = Math.sin(performance.now() / 1800) * 0.34;
          renderer.render(scene, camera);
        }
        render();
      }, undefined, () => { canvas.style.display = 'none'; });
    } catch {
      document.getElementById('aether-sushi-canvas').style.display = 'none';
    }
  }
})();

# Topological Sort

(설명)

## Topological Sort Example Code in C++

```C
//2019072361_김정훈_12838 
#include <stdio.h>
#include <stack>

using namespace std;
stack<int> graph;

bool adj[1005][1005];
bool E[1005];
bool V[1005];

int N, M;
bool DAG = true;

void dfs(int u){
  if(E[u]){
    DAG = false;
    return;
  }
  E[u] = true;

  for(int i = 1 ; i <= N ; i++){
    if(adj[u][i] && !V[i]){
      dfs(i);
    }
  }
  V[u] = true;
  graph.push(u);
  return;
}

int main(){
  scanf("%d %d",&N, &M);
  int from, to;
  int a, b;
  for(int i = 0; i < M; i++){
  scanf("%d %d",&a,&b);
    adj[a][b] = true;
  }
  for(int i = 1 ; i <= N ; i++){
    if(!V[i]){
      dfs(i);
    }
  }
  if(graph.size() != N){
    DAG = false;
  }
  printf("%d\n",DAG);
  if(DAG){
    while(!graph.empty()){
      printf("%d ",graph.top());
      graph.pop();
    }
    printf("\n");
  }

  return 0;
}

```

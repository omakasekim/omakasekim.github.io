# Huffman

(설명)

## Huffman Example Code in C++

```C
//2019072351_김정훈_12838 
#include <string>
#include <stdio.h>
#include <bits/stdc++.h>
using namespace std;

struct intpair {
	int x, y;
};

int v[30000];
int N,total,res,c;
vector<int> s;
priority_queue<pair<int, pair<int,int> > > node;
pair<intpair, int> tree[60000];

void Huffman(int x, int N) {
	pair<intpair, int> temp = tree[x];
	if (temp.first.x == -1 && temp.first.y == -1) {
		res += (N*temp.second);
		return;
	}
	Huffman(temp.first.x, N + 1);
	Huffman(temp.first.y, N + 1);
}

int main() {
	scanf("%d", &N);
	for (int i = 0; i < N; i++) {
		string str;
		cin >> str >> v[i];
		node.push( {-v[i], {v[i],c++} } );
	}
	scanf("%d", &total);

	int ind = N, idx = 0;
	while (ind) {
		idx++;
		ind /= 2;
	}
	printf("%d\n", total*idx);

	while (node.size()>1) {
		pair<int,pair<int,int> > Left;
		pair<int,pair<int,int> > Right;
		Left = node.top();
		node.pop();
		Right = node.top();
		node.pop();

		if(Left.second.first != 0)
			tree[Left.second.second] = { {-1,-1}, Left.second.first};
		if(Right.second.first != 0)
			tree[Right.second.second] = { {-1,-1}, Right.second.first};

		tree[c] = { {Left.second.second,Right.second.second}, 0};
		node.push( {Left.first+Right.first, {0, c++}});
	}
	Huffman(c-1,0);
	printf("%d\n",res);

	return 0;
}
```

# Connected Component

(설명)


## Connected Component Example Code in C++

```C
//2019072351_김정훈_12838 
#include <stdio.h>
#include <vector>
#include <algorithm>
using namespace std;

int V[1001], vertice[1001];
vector<int> chain[1001];

int idx, N, M;

void dfs(int v)
{
    V[v] = true; 
	vertice[v] = idx;
    for(int i = 1; i <= N; ++i){
        if(find(chain[v].begin(), chain[v].end(), i) != chain[v].end() && !V[i]){
            dfs(i);
        }
    }
}

int main()
{
    scanf("%d %d", &N, &M);
    for(int i = 1; i <= N; ++i){
    	V[i] = 0;
	}
    int a, b;
    for(int i = 0; i < M; i++){
		scanf("%d %d", &a, &b);
	    chain[a].push_back(b);
        chain[b].push_back(a);
    }

    for(int i = 1; i <= N; ++i){
		if(!V[i]){
		idx++;
		dfs(i);
		}
	}
    printf("%d\n", idx);
    return 0;
}

```

# Dijkstra's Algorithm

(설명)


## Dijkstra's Algorithm Example Code in C++

```C
//2019072351_김정훈_12838 
#include<bits/stdc++.h>
#include <stdio.h>
#define INF 9999999
using namespace std;
int N,M;
list< pair<int, int> > *adj;

void addEdge(int x, int y, int w){
    adj[x].push_back(make_pair(y, w));
}

int compare(int* v, int u, int w){
    if (*v > u + w){
        *v = u + w;
        return 1;
    }
    else return 0;
}

void Dijkstra(){
    priority_queue< pair<int,int>, vector <pair<int,int> > , greater<pair<int,int> > > DJK;
    vector<int> distance(N, INF);

    int source = 0;
    DJK.push(make_pair(source, 0));
    distance[source] = 0;

    while (!DJK.empty())
    {
        int source = DJK.top().first;
        DJK.pop();

        for (list< pair<int, int> >::iterator i=adj[source].begin(); i != adj[source].end(); i++)
        {
            int dest = (*i).first;
            int weight = (*i).second; 
            
            if(compare(&distance[dest], distance[source], weight)) DJK.push(make_pair(dest, distance[dest]));
        }
    }

    int res = 0;
    for (int i=0; i<N; i++)
        res = distance[i]>res? distance[i]:res;
    printf("%d",res);
}

int main()
{
    scanf("%d %d",&N,&M);
    adj = new list< pair<int,int> > [N];

    for(int i=0 ; i<M ; i++){
        int x,y,w;
        scanf("%d %d %d",&x,&y,&w);
        addEdge(--x,--y,w);
    }
    Dijkstra();
    return 0;
}

```

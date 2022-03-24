# Finding Same Keys

(설명)

예제 문제
```
Input (Standard input)

In the first line, the number of input keys N and M (1≤N, M≤100000) are given where
N is the number of keys in set A and M is the number of keys in set B.
The keys in set A are given in the second line and the keys in set B are given in the third
line.

Output (Standard output)
print the number of keys both in A and B. 
```

## Finding Same Keys Example Code in C++

```C
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(){
int N,M;
scanf("%d %d",&N,&M);
int A[N];
int B[M];


for(int i = 0; i<N; i++)scanf("%d",&A[i]);
for(int j = 0; j<M; j++)scanf("%d",&B[j]);
int cnt = 0;
for(int idx =0;idx<N;idx++){
for(int jdx =0;jdx<M;jdx++){
	if(A[idx]==B[jdx])cnt++;
}
}
printf("%d\n",cnt);


return 0;
}

```

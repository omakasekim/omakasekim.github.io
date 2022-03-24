# Counting

(설명)

예제 문제

```
Input (Standard input)

In the first line, the number of input keys N (1 ≤ N ≤ 100000) and the range of input keys
M (1 ≤ M ≤ 100000) and number of query ranges K (1 ≤ K ≤ 100000) are given. In the next
K lines, two numbers A[i] and B[i] are given. (1 ≤ i ≤ K) In the next N lines, a key is given
in each line.

Output (Standard output)
print the number of keys in range A[i] ≤ keys ≤ B[i]. (1 ≤ i ≤ K) 

```

## Counting Example Code in C++

```C
#include <stdio.h>
#include <stdlib.h>

int main(void){
	int N,M,K;
	scanf("%d %d %d", &N, &M, &K);

	int A[N];
	int B[M];
	int query[K][2];
	
	for(int i = 0; i < N; i++) A[i] = 0;
	for(int i = 0; i < M; i++) B[i] = 0;
	for(int i = 0; i < K; i++) query[i][0] = 0;
	for(int i = 0; i < K; i++) query[i][1] = 0;
	
	
	int L,R;
	for(int i = 0; i<K; i++){
		scanf("%d %d",&L,&R);
		query[i][0] = L;
		query[i][1] = R;
	}	
	int val;
	for(int i =0; i<N;i++){
	scanf("%d", &val);
	A[i] = val;
	B[val-1]++;
	}
	int count;
	
	for(int i =0;i<K;i++){
	count = 0;
	if(query[i][0]<query[i][1]){
	
	for(int j = query[i][0]; j<=query[i][1];j++){
		count += B[j-1];
	}
}
	if(query[i][0]>query[i][1]){
	for(int j = query[i][1]; j<=query[i][0];j++){
		count += B[j-1];
	}
}
	printf("%d\n", count);
	}
}

```

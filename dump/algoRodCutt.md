# Rod Cutting

(설명)

예제 문제
```
Input (Standard input)

In the first line, an integer N is given which means the length of Rod (1 ≤ N ≤ 100). In the
second line, N integers are given which means pi (pi-1 ≤ pi ≤ pi+1). pi is the value when the
length of Rod is i.

Output (Standard output)

In the first line, print the maximum profit which could be made by the Rod's length of
N.
In the next line, print the lengths of Rod for the maximum profit in non-decreasing order
```

## Rod Cutting Example Code in C++

```C
#include <stdio.h>
#include <bits/stdc++.h>

void RodCutting(int* arr, int len) {
	int* rod = (int*)malloc(sizeof(int)*len+1); 
	int* sub = (int*)malloc(sizeof(int)*len+1); 
	rod[0] = 0;
	for (int i = 1; i <= len; i++) {
		int q = INT_MIN;
		for (int j = 0; j < i; j++) {
			if (q < arr[j] + rod[i - j - 1]) {
				q = arr[j] + rod[i - j - 1];
				sub[i] = j + 1;
			}
		}
		rod[i] = q;
	}
	printf("%d\n",rod[len]);
	for (; len > 0; len -= sub[len])
		printf("%d ",sub[len]);
}

int main() {
	int length;
	scanf("%d",&length);
	int* Array = (int*)malloc(sizeof(int)*length);
	for (int i = 0; i < length; i++)
		scanf("%d ",&Array[i]);
	RodCutting(Array, length);
	return 0;
}

```

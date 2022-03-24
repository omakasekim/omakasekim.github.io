# Priority Queue

(설명)

## 예제 문제

```
Input (Standard input)


Each line of input consists of at most three integers.
If the first integer is 0, print the output and terminate the program.
If the first integer is 1, insert the second integer.
If the first integer is 2, extract the maximum number from the priority queue.
If the first integer is 3, substitute the third integer for the element indexed by the
second number. After the modification, the heap structure must be restored.
Assume that the smallest index of the priority queue is 1.
When the time parent node changes its value with one of child nodes value, if right
child value is same with left child value, parent node should change its value with right
child node.


Output (Standard output)
In the first line, print the extracted elements. 

```

## Priority Queue Example Code in C++

```C
#include <stdio.h>

int heapsize = 0;
int maxsize = 100001;

void swap(int *a, int *b){
	int temp;
	temp = *a;
	*a = *b;
	*b = temp;
}

int getRightChild(int arr[], int idx){
	if((((2*idx)+1) < maxsize) && (idx >= 1))
		return(2*idx)+1;
	return -1;
}

int getLeftChild(int arr[], int idx){
	if(((2*idx) < maxsize) && (idx >= 1))
		return(2*idx);
	return -1;
}

int getParent(int arr[], int idx){
	if((idx >1) && (idx < maxsize)){
		return idx/2;
	}
	return -1;
}

void maxHeapify(int arr[], int idx){
	int LC = getLeftChild(arr,idx);
	int RC = getRightChild(arr,idx);
	
	int root = idx;
	
	if((LC <= heapsize) && (LC > 0) && (RC <= heapsize) && (RC > 0)){
	if((arr[LC] > arr[root]) && (arr[RC] >arr[root]) && arr[LC] == arr[RC]){
	root = RC;
	}
	}
	if((LC <= heapsize) && (LC > 0)){
		if(arr[LC] > arr[root]){
			root = LC;
		}
	}
	
	if((RC <= heapsize) && (RC > 0)) {
		if(arr[RC] >arr[root]){
			root = RC;
		}
	}
	
	if(root != idx){
		swap(&arr[idx], &arr[root]);
		maxHeapify(arr,root);
	}
}

void buildMaxHeap(int arr[]){
	for(int i = heapsize/2; i<=1; i--){
		maxHeapify(arr,i);
	}
}

int maximum(int arr[]){
	return arr[1];
}

int extractMax(int arr[]){
	int max = arr[1];
	arr[1] = arr[heapsize];
	heapsize--;
	maxHeapify(arr,1);
	return max;
}
void increaseKey(int arr[], int idx, int key) {
  arr[idx] = key;
  while((idx>1) && (arr[getParent(arr, idx)] < arr[idx])) {
    swap(&arr[idx], &arr[getParent(arr, idx)]);
    idx = getParent(arr, idx);
  }
}

void decreaseKey(int arr[], int idx, int key) {
  arr[idx] = key;
  maxHeapify(arr, idx);
}

void insert(int arr[], int key){
	heapsize++;
	arr[heapsize] = -99999;
	increaseKey(arr, heapsize, key);
}


void print(int arr[]){
	for(int i = 1; i<=heapsize;i++){
		printf("%d ",arr[i]);
	}
	printf("\n");
}


int main(void){
	int arr[maxsize];
	int A,B,C;
	
	A = 4;
	while(A!=0){
	scanf("%d", &A);
	if(A==1){
		scanf("%d", &B);
		insert(arr, B);
	}
	if(A==2)printf("%d ",extractMax(arr));
	if(A==3){
		scanf(" %d %d", &B, &C);
		if(C > arr[B])
		increaseKey(arr, B, C);
		if(C < arr[B])
		decreaseKey(arr, B, C);
		if(C==arr[B])
		decreaseKey(arr, B, C);
	}
}
	if(A==0) print(arr);
}

```

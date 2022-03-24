# Merge Sort

(설명)

예제 문제
```
Input (Standard input)

In the first line, the number of input keys N is given ( 1 <= N <= 100,000).
In the next N lines, a key is given in each line.

Output (Standard Output)
Print the input keys sorted in decreasing order.
```

## Merge Sort Example Code in C++

```C
#include <stdio.h> 
#include <stdlib.h> 

void Merge(int arr[], int l, int m, int r) 
{ 
    int i, j, k; 
    int LSize = m - l + 1; 
    int RSize = r - m; 
  
    int L[LSize], R[RSize]; 
  
    for (i = 0; i < LSize; i++) 
        L[i] = arr[l + i]; 
    for (j = 0; j < RSize; j++) 
        R[j] = arr[m + 1 + j]; 
  
    i = 0;j = 0;k = l;
    while (i < LSize && j < RSize) { 
        if (L[i] > R[j]) { 
            arr[k] = L[i]; 
            i++; 
        } 
        else { 
            arr[k] = R[j]; 
            j++; 
        } 
        k++; 
    } 
  
    while (i < LSize) { 
        arr[k] = L[i]; 
        i++; 
        k++; 
    } 
  
    while (j < RSize) { 
        arr[k] = R[j]; 
        j++; 
        k++; 
    } 
} 
  

void mergeSort(int arr[], int l, int r) 
{ 
    if (l < r) { 

        int m = l + (r - l) / 2; 
        
        mergeSort(arr, l, m); 
        mergeSort(arr, m + 1, r); 
  
        Merge(arr, l, m, r); 
    } 
} 



int main() 
{ 
    int N;
    scanf("%d",&N);
    int arr[N];
    for(int cnt=0;cnt<N;cnt++){
        scanf("%d",&arr[cnt]);
    }
    mergeSort(arr, 0, N - 1); 
    
    for(int idx =0;idx<N;idx++){
        printf("%d\n",arr[idx]);
    }
    return 0; 
} 

```

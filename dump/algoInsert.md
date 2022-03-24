# Insertion Sort

(설명)

## 예제 문제
```
Input (Standard input)

In the first line, the number of input keys N is given ( 1 <= N <= 30,000).
In the next N lines, a key is given in each line.

Output (Standard Output)
Print the input keys sorted in decreasing order.
```

## Insertion Sort Example Code in C++

```C

#include <stdio.h> 
#include <math.h> 
  
void Insertion(int arr[], int N) 
{ 
    int i, key, j;
    
    for (i = 1; i < N; i++) { 
        key = arr[i]; 
        j = i - 1; 
  
        while (j >= 0 && arr[j] < key) { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    } 
    
    int idx; 
    for (idx = 0; idx < N; idx++) 
        printf("%d\n", arr[idx]); 
} 



int main() 
{ 
    int N;
    scanf("%d",&N);
    int arr[N];
    for(int cnt=0;cnt<N;cnt++){
        scanf("%d",&arr[cnt]);
    }
    Insertion(arr,N); 
    return 0; 
} 
```

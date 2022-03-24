# Matrix Chain

(설명)

예제 문제

```
Input (Standard input)

In first line, an integer N is given which is the number of matrices (1 ≤ N ≤ 100).
In the next line, N+1 integers are given where the ith integer is pi

Output (Standard output)

In first line, print minimum scalar multiplications to compute the product.
In the next line, print an optimal parenthesization of A1, A2, …, An. When printing it, just
print the parenthesis, and the number of matrix without ‘A’, and every parenthesis and
number must be separated by a space.

```


## Matrix Chain Example Code in C++

```C
//2019072351_김정훈_12838 
#include <iostream>
#include <bits/stdc++.h>
#include <string>
#include <sstream>
#include <stdio.h>

std::string toString(int &i){
	std::stringstream ss;
	ss << i;
	
	return ss.str();
}
    
std::string result = "";
void bracOrder(int i, int j, int n, int* bracket,
                      int& b)
{
    if (i == j) {
        std::string temp = toString(b);
		b++;
        result += temp;
        return;
    }
 
    result += '(';
    bracOrder(i, *((bracket + i * n) + j), n,
                     bracket, b);
    bracOrder(*((bracket + i * n) + j) + 1, j, n,
                     bracket, b);
    result += ')';
}
 
int matrixOrder(int p[], int n, int a)
{
    int m[n][n];
    int bracket[n][n];
    for (int i = 1; i < n; i++)
        m[i][i] = 0;
 
    for (int L = 2; L < n; L++)
    {
        for (int i = 1; i < n - L + 1; i++) 
        {
            int j = i + L - 1;
            m[i][j] = INT_MAX;
            for (int k = i; k <= j - 1; k++) 
            {
                int q = m[i][k] + m[k + 1][j]
                        + p[i - 1] * p[k] * p[j];
                if (q < m[i][j]) 
                {
                    m[i][j] = q;
                    bracket[i][j] = k;
                }
            }
        }
    }
    int &beta = a;
    bracOrder(1, n - 1, n, (int*)bracket, beta);
    return (m[1][n - 1]);
}
 
int main()
{
	int alpha = 1;
	int A;
	scanf("%d",&A);
	int* arr = (int*)malloc(sizeof(int)*A+1);
	for(int i = 0; i < A+1; i++)
		scanf("%d", &arr[i]);
	int res = matrixOrder(arr, A+1, alpha);
	printf("%d\n", res);
	std::cout<<result;
	return 0;
}
```

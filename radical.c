#include <stdio.h>
#include <math.h>

/*
 an+1 = ( an + n / an ) * 1 / 2 
 */

float SqrT3(float n) {

      float an = (float)n/2.0, 

            anplus1 = (an + (float)n/an ) / 2.0;

      float EPS = 0.00001;

      while( (fabs(an - anplus1)) >= EPS) {

            an = anplus1;

            anplus1 = (an + (float)n/an ) / 2.0;
      }                

   return anplus1;
}



float SqrT2(float n) {
      
      int i;   

      float an = n / 2.0, 

            anplus1 = (an + n ) / 2.0;

      for(i = 1; i <= 1000; ++i) {

            an = anplus1;

            anplus1 = (an + (float)n/an ) / 2.0;
      }                

   return anplus1;
}

double SqrT(int n) {

	double an, 

	      anplus1, 

	      eps;

          eps = 0.0000001;

          an = n / 2.0;

          anplus1 = (an + (double)n / an ) * 1.0 / 2.0;

          while( (anplus1 > an) ? anplus1 - an : an - anplus1 >= eps)  {

                  an = anplus1;

                  anplus1 = (double)( an + (double)n / an ) * 1.0 / 2.0;
          }

      return anplus1;
}

int main(int argc, char const *argv[]) {

	     int n;
	     printf("n -> ");
         scanf("%d", &n);
         printf("%f\n", SqrT(n));
         printf("%f\n", SqrT2(n));
         printf("%f\n", SqrT3(n));

	return

#include<stdio.h>
void main (){
    int x,y,r,v=0;
    printf("Enter the radius");
    scanf("%d",&r);
    for(x=-r;x<=r;x++){
        for(y=-r;y<=r;y++){
            if(x*x+y*y==r*r)
            v=v+4;
        }
    }
    printf("\n  Total no of points=%d",&v);
}
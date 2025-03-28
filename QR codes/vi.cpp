#include <iostream> 
#include <string> 
#include <map>
#include <string>

using namespace std; 
int main(){
    map<int,int>mp;
mp[1]=2;
mp[1]=5;
for(auto it:mp)
cout<<it.second<<endl;

} 

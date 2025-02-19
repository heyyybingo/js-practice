/*
 * @Author: heyyybingo 283385508@qq.com
 * @Date: 2025-01-03 14:31:27
 * @LastEditors: heyyybingo 283385508@qq.com
 * @LastEditTime: 2025-01-03 14:40:39
 * @FilePath: /js-practice/algorithm/string/kmp.js
 * @Description: 
 * 
 * Copyright (c) 2025 by heyyybingo, All Rights Reserved. 
 */


function getNext(p){
    const next=[0]
    let j=0;
    for(let i=1;i<p.length;i++){
        while(p[i]!=p[j]&&j>0){
            j=next[j-1]
        }

        if(p[i]==p[j]){
            next[i]=next[i-1]+1;
            j++;
          
        }else{
            next[i]=0
        }
    }
    return next
}

function kmp(normal,target){

    const next=getNext(target)
    console.log(next)
}


kmp("ABCSSADABCDABD","aaabbab")
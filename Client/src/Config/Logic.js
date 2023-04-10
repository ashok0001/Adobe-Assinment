export const isLikedPost = (post,reqUserId)=>{

    const likedUsers=post?.likedUser;

    for(let user of likedUsers){
        if(user.id===reqUserId)return true;
    }

    return false;
}


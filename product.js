function getShortTitle(){
    if(title.length > 49) title = title.substring(0,47) ;
       else return title;
       return title + '...';    
}



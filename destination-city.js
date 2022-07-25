var destCity = function(paths) {
    let list=[];
    for(let i=0; i<paths.length; i++){
        list.push(paths[i][0]);
    }
    for(let i=0; i<paths.length; i++){
        if(!list.includes(paths[i][1]))
            return paths[i][1];
    }
};

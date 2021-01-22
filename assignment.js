function kilometerToMeter(kilo){
    if(kilo>=0){
        var meter = kilo*1000;
    return meter;
    }
    else{
        return "input undefined"
    }
}
/*var distance = kilometerToMeter(5);
console.log(distance);*/


function budgetCalculator(watch, mobile, laptop){
    if(watch>=0 && mobile>=0 && laptop>=0){
        var watchCost = watch*50;
        var mobileCost = mobile*100;
        var laptopCost = laptop*500;
        var totalCost = watchCost+mobileCost+laptopCost;
        return totalCost;
    }
    else{
        return "input undefined"
    }
}
/*var items = budgetCalculator(3, 5, 4);
console.log(items);*/



function hotelCost(days){
    var cost = 0;
    if(days>0 && days<=10){
        cost = days*100;
    }
    else if(days>0 && days<=20){
        var firstPart = 10*100;
        var remaining = days - 10;
        var secondPart =remaining*80;
         cost = firstPart+ secondPart;
    }
    else if(days>20){
        var firstPart = 10*100;
        var secondPart =10*80;
        var remaining = days - 20;
        var thirdPart = remaining*50;
        cost = firstPart+secondPart+thirdPart;
    }
    else{
        
        return "hasn't been here"
    }
    return cost;
}
/*var countCost = hotelCost(25);
console.log(countCost);*/



function megaFriend(friends){
    var maximum = friends[0];
    for(i=0; i<friends.length; i++){
        var name = friends[i];
        if( name.length>maximum.length ){
            maximum=name;     
        }
    }
    return maximum;
}
/*var friendsName = megaFriend(['sohan','arif','sanjid', 'swapnil','abdulla']);
console.log(friendsName);*/




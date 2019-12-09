"use strict"
    var draw = SVG('drawing').size(600, 400);

    function makeBox()

    {
    var line1 = draw.line(25,175,26,175);
    line1.stroke({width:1});
    line1.animate(4000).size(550);

    var line2 = draw.line(575,175,575,176);
    line2.stroke({width:1});
    line2.animate({duration:4000,delay:4000}).size(200).move(575,375);


    var line3 = draw.line(575,375,574,375);
    line3.stroke({width:1});
    line3.animate({duration:4000,delay:8000}).move(25,375).size(550);

    var line4 = draw.line(25,375,25,374);
    line4.stroke({width:1});
    line4.animate({duration:4000,delay:12000}).size(200).move(25,175);
    }
    makeBox();


    function makeBaseb1(bx,by,c,s)

    {
    var Baseb1 = draw.rect(550,200).opacity(0).fill(c).stroke();
    Baseb1.animate({delay:'16s'}).opacity(1).fill({color:c});
    Baseb1.stroke({width:s,color:'black'});
    Baseb1.move(bx,by);

    }
    makeBaseb1(25,175,'#FF9900',1);
import React from "react";
import category1 from '../images/category1.avif';
import category2 from '../images/category2.avif';
import category3 from '../images/category3.avif';
import category4 from '../images/category4.png';
import category5 from '../images/category5.avif';
import category6 from '../images/category6.avif';
import category7 from '../images/category7.avif';
import category8 from '../images/category8.avif';
import category9 from '../images/category9.avif';
import category10 from '../images/category10.avif';
import category11 from '../images/category11.avif';
import category12 from '../images/category12.avif';



   

   
      function Category_component(){

      
        return (
         <div className=" h-44flex justify-around m-4">
        <ul className="flex gap-2">
         <li><img className="w-24 " src={category1} alt="" /></li>
         <li><img className="w-24 " src={category2} alt="" /></li>
         <li><img className="w-24 " src={category3} alt="" /></li>
         <li><img className="w-24 " src={category4} alt="" /></li>
         <li><img className="w-24 " src={category5} alt="" /></li>
         <li><img className="w-24 " src={category6} alt="" /></li>
         <li><img className="w-24 " src={category7} alt="" /></li>
         <li><img className="w-24 " src={category8} alt="" /></li>
         <li><img className="w-24 " src={category9} alt="" /></li>
         <li><img className="w-24 " src={category10} alt="" /></li>
         <li><img className="w-24 " src={category11} alt="" /></li>
         <li><img className="w-24 " src={category12} alt="" /></li>
         <li><img className="w-24 " src={category1} alt="" /></li>
        </ul>
      </div>
        )
      }
      

export { Category_component };
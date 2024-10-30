<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;

class MenuController extends Controller
{
    //
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */

     public function manageMenu()
     {
         $menus = Menu::where('parent_id', '=', 0)->get();
         $allMenus = Menu::pluck('title','id')->all();
         return view('menuTreeview',compact('menus','allMenus'));
     }
 
 
 
     /**
      * Show the application dashboard.
      *
      * @return \Illuminate\Http\Response
      */
 
     public function addMenu(Request $request)

     {
         $this->validate($request, [
                 'title' => 'required',
             ]);
 
         $input = $request->all();
         $input['parent_id'] = empty($input['parent_id']) ? 0 : $input['parent_id'];
        
         Menu::create($input);
         return back()->with('success', 'New Menu added successfully.');
     }

}

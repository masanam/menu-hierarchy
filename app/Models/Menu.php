<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;
    public $fillable = ['title','parent_id'];
    /**
     * Get the index name for the model.
     *
     * @return string
    */

    public function childs() {
        return $this->hasMany('App\Models\Menu','parent_id','id') ;
    }
}

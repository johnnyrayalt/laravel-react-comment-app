<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comments extends Model
{
    protected $fillable = ['name', 'email', 'comment', 'created_at', 'updated_at'];
}

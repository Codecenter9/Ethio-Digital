<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'description',
        'author',
        'category',
        'image',
        'date',
        'tags',
        'likes',
        'views',
    ];


    protected $casts = [
        'tags' => 'array',
        'date' => 'datetime',
    ];
}

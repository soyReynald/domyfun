<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tour extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'feat_image', 'description', 'price'];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{

    protected $fillable = ['name','email','phone_no','moving_from', 'moving_to', 'message'];
}

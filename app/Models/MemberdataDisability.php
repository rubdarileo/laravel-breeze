<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MemberdataDisability extends Model
{
    protected $table = 'memberdata_disabilities';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];
}
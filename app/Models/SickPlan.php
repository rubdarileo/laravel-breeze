<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SickPlan extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'cost',
    ];

    public function memberdata()
    {
        return $this->hasMany(Memberdata::class);
    }
}
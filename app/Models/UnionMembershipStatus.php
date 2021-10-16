<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UnionMembershipStatus extends Model
{
    
    protected $table = "union_membership_status";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];
}
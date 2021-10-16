<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Memberdata extends Model
{
    protected $table = 'memberdata';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'firstname',
        'lastname',
        'middleinitial',
        'ssnumber',
        'hris',
        'home_phone',
        'cell_phone',
        'birth_date',
        'email',
        'iaffmembernumber',
        'web_active',
        'suffix',
        'iaff',
        'uniaff',
        'retire_date',
        'erased',
        'join_date',
        'rdray',
        'department',
        'unit',
        'title_id',
        'gender_id',
        'sick_plan_id',
        'ethnicity_id'
    ];

    public function title()
    {
        return $this->belongsTo(Title::class);
    }

    public function gender()
    {
        return $this->belongsTo(Gender::class);
    }

    public function sickPlan()
    {
        return $this->belongsTo(SickPlan::class);
    }

    public function Ethnicity()
    {
        return $this->belongsTo(Ethnicity::class);
    }
}
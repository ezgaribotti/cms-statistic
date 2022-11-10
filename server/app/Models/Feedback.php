<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Base
{
    use HasFactory;

    protected $table = 'feedbacks';

    protected $fillable = [
        'tracking_number',
        'description',
        'sorting_id',
    ];

    public function sorting()
    {
        return $this->belongsTo(Sorting::class, 'sorting_id');
    }
}

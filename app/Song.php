<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Song extends Model
{
    //
    protected $fillable = ['title', 'lyrics', 'artist_id'];

    public function artist()
    {
        return $this->belongsTo(Artist::class, 'artist_id');
    }
}

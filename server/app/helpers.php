<?php

use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

/**
 * Global helpers.
 */
class Helper
{
    /**
     * Advanced database search.
     * 
     */
    public static function searchData($search, $model, $columns)
    {
        $data = [];

        array_unshift($columns, 'id');

        foreach ($columns as $column) {
            $result = $model->where($column, 'like', chr(37) . $search . chr(37))->limit(10)->get();
            $result = json_decode(json_encode($result), true);
            $data = array_merge($data, $result);
        }

        return ['data' => $data];
    }

    /**
     * Save image to storage.
     * 
     */
    public static function saveImage($image)
    {
        $imageName = Str::uuid()->toString() . chr(46) . $image->getClientOriginalExtension();
        $imageName = Str::replace(chr(45), chr(100), $imageName);

        $imageFile = Image::make($image);
        $imageFile->resize(500, null, function ($constraint) {
            $constraint->aspectRatio();
        });

        $storagePath = "images" . chr(47) . $imageName;
        $imageFile->save($storagePath, 80);

        return $imageName;
    }
}

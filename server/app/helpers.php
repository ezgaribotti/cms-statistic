<?php

use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

function createImageName($imageBase = null)
{
    $imageName = Str::uuid()->toString() . chr(46);
    $imageName = Str::replace(chr(45), chr(100), $imageName);

    if ($imageBase) {
        $imageName .= $imageBase->getClientOriginalExtension();
    } else {
        $imageName .= chr(106) . chr(112) . chr(103);
    }

    return $imageName;
}
/**
 * Global helpers.
 */
class Helper
{
    /**
     * Advanced database search.
     * 
     * @param string $search
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
        $imageName = createImageName($image);
        $imageFile = Image::make($image);
        $imageFile->resize(500, null, function ($constraint) {
            $constraint->aspectRatio();
        });

        $storagePath = "images" . chr(47) . $imageName;
        $imageFile->save($storagePath, 80);

        return $imageName;
    }

    /**
     * Test environment.
     * 
     */
    public static function randomImageName()
    {
        return createImageName();
    }

    /**
     * Create order number.
     * 
     * @param int $preferenceId
     */
    public static function createOrderNumber($preferenceId)
    {
        return fake()->randomLetter() . time() . chr(112) . $preferenceId;
    }
}

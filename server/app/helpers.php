<?php

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
}

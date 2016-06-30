<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        $schema->table('users', function (Blueprint $table) {
            $table->date('birthday');
        });
    },

    'down' => function (Builder $schema) {
        $schema->table('users', function (Blueprint $table) {
            $table->dropColumn('birthday');
        });
    }
];

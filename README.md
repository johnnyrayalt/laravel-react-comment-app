How to run this program locally:

1.  `$ git clone https://github.com/johnnyrayalt/laravel-react-comment-app.git && cd laravel-react-comment-app`
1.  `$ composer install`
1.  `$ npm install`
1.  `$ cp .env.example .env`
1.  `$ php artisan key:generate` to generate an app key for the `.env` file
1.  `$ touch database/database.sqlite`
1.  Change the path for `DB_DATABASE` in the `.env` file to match the absolute path to the `sqlite.database` that was just created
1.  if on mac run the command `$ chmod 700 database/reseedDB` to allow access to the bash script that seeds and builds a database in one command
1.  `$ npm run reseed` to seed the database

    -   if you encounter permission errors, or the script won't run, use the following commands to manualy seed and migrate the database

            ```
            $ composer dump-autoload
            $ php artisan migrate:fresh --seed
            $ php artisan db:seed --class=CommentsTableSeeder
            $ npm run dev
            ```

1.  `$ php artisan serve` to start Laravel server
1.  In a new terminal run `$ npm run watch` to start to local dev server

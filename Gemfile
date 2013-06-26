source 'https://rubygems.org'
gem 'rails', '3.2.8'


# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

# gem 'sqlite3'

group :production, :staging do
  gem "pg"
end

group :development, :test do
  gem "sqlite3-ruby", :require => "sqlite3"
  gem 'haml-rails'
end


# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer', :platforms => :ruby

  gem 'uglifier', '>= 1.0.3'
end

# jquery
gem "jquery-rails", "2.0.2"
gem 'jquery-ui-rails'

# haml gems
gem 'haml', '~> 3.1.7'

gem 'compass-rails'

gem "awesome_print"


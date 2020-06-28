namespace :db do
  task :setup => [:create, :migrate] do
  end
end
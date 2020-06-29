namespace :db do
  desc "Setup database"
  task :build do
    exists = Rake::Task["db:exists"].invoke[0].call
    Rake::Task["db:setup"].invoke unless exists
  end
  desc "Checks to see if the database exists"
  task :exists do
    begin
      Rake::Task['environment'].invoke
      ActiveRecord::Base.connection
    rescue
      false
    else
      true
    end
  end
end
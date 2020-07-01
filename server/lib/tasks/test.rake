namespace :test do
  task :watch do
    sh "guard"
  end
  task :run do
    sh "rspec"
  end
end
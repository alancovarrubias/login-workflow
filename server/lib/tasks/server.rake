namespace :server do
  task :start do
    sh "rails server -b '0.0.0.0'"
  end
end
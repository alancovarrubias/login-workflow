Rails.application.config.action_controller.forgery_protection_origin_check = false
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost:8080'

    resource '*',
      headers: :any,
      methods: [:get, :post, :patch, :put, :delete, :head],
      credentials: true
  end
end
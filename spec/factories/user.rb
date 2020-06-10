FactoryBot.define do
  factory :user do
    sequence(:id) { |n| n }
    sequence(:username) { |n| "username#{n}" }
    password { "FAKE_PASSWORD" }
  end
end

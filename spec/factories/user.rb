FactoryBot.define do
  factory :user do
    sequence(:id) { |n| n }
    sequence(:username) { |n| "username#{n}" }
    password { "TEST_PASSWORD" }
  end
end

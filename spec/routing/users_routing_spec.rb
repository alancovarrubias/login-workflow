require "rails_helper"

RSpec.describe UsersController, type: :routing do
  describe "routing" do
    it "routes to #create" do
j     expect(post: "/users").to route_to("users#create", format: :json)
    end
  end
end

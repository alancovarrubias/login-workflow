 require 'rails_helper'
RSpec.describe "/users", type: :request do
  let(:valid_attributes) {
    {
      username: "TEST_USERNAME",
      password: "TEST_PASSWORD",
    }
  }

  let(:invalid_attributes) {
    {
      username: "",
      password: "",
    }
  }


  describe "POST /create" do
    context "with valid parameters" do
      it "creates a new User" do
        expect {
          post users_url, params: { user: valid_attributes }
        }.to change(User, :count).by(1)
      end

      it "responds with the username and a 200 status" do
        post users_url, params: { user: valid_attributes }
        expect(json["username"]).to eq(valid_attributes[:username])
        expect(response).to be_successful
      end
    end

    context "with invalid parameters" do
      it "does not create a new User" do
        expect {
          post users_url, params: { user: invalid_attributes }
        }.to change(User, :count).by(0)
      end

      it "responds with a hash of errors and a 400 status" do
        post users_url, params: { user: invalid_attributes }
        expect(json).to have_key("username")
        expect(json).to have_key("password")
        expect(response).to be_a_bad_request
      end
    end
  end
end

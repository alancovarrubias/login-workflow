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

      it "responds with a successful status and the user" do
        post users_url, params: { user: valid_attributes }
        expect(json).to match_snapshot("valid_create_user")
        expect(response).to be_successful
      end
    end

    context "with invalid parameters" do
      it "does not create a new User" do
        expect {
          post users_url, params: { user: invalid_attributes }
        }.to change(User, :count).by(0)
      end

      it "responds with an unprocessable status and the relevant errors" do
        post users_url, params: { user: invalid_attributes }
        expect(json).to match_snapshot("invalid_create_user")
        expect(response).to be_unprocessable
      end
    end

    context "with duplicate username" do
      before(:each) do
        @user_params = { username: "FAKE_USERNAME", password: "FAKE_PASSWORD" }
        @user = create(:user, @user_params)
      end
      
      it "does not create a new User" do
        expect {
          post users_url, params: { user: @user_params } 
        }.to change(User, :count).by(0)
      end

      it "responds with an unprocessable status and the relevant errors" do
        post users_url, params: { user: @user_params }
        expect(json).to match_snapshot("duplicate_create_user")
        expect(response).to be_unprocessable
      end
    end
  end
end

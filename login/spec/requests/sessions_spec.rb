require 'rails_helper'

user_params = {id: 1, username: "TEST_USERNAME", password: "TEST_PASSWORD"}
RSpec.describe "Sessions", type: :request do
  describe "POST /create" do
    context "with an authenticated user" do
      it "responds with a successful status" do
        user = create(:user, user_params)
        post session_url, params: { user: user_params }
        expect(response).to be_successful
        expect(json).to match_snapshot("authenticated_user")
      end
    end

    context "with an unauthenticated user" do
      it "responds with an unauthorized status and an error message" do
        post session_url, params: { user: user_params }
        expect(response).to be_unauthorized
        expect(json).to match_snapshot("unauthenticated_user")
      end
    end
  end
  describe "DELETE /destroy" do
    it "responds with a successful status" do
      delete session_url
      expect(response).to be_successful
    end
  end
end

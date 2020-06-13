require 'rails_helper'

user_params = {id: 1, username: "TEST_USERNAME", password: "TEST_PASSWORD"}
RSpec.describe "Sessions", type: :request do
  describe "POST /create" do
    context "with an authenticated user" do
      it "responds with a successful status" do
        user = create(:user, user_params)
        mocked_user_class = mock_class("User")
        allow(mocked_user_class).to receive(:authenticate).and_return(user)
        post session_url, params: { user: user_params }
        expect(response).to be_successful
      end
    end

    context "with an unauthenticated user" do
      it "responds with an unauthorized status and an error message" do
        mocked_user_class = mock_class("User")
        allow(mocked_user_class).to receive(:authenticate).and_return(false)
        post session_url, params: { user: user_params }
        expect(response).to be_unauthorized
        expect(json).to match_snapshot("unauthenticated_user")
      end
    end
  end
end

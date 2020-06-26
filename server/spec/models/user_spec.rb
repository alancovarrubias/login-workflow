require 'rails_helper'

RSpec.describe User, type: :model do
  it "Factory Bot is valid" do
    expect(build(:user)).to be_valid
  end

  describe "validations" do
    it { expect have_secure_password }
    it { expect validate_presence_of(:username) }
    it { expect validate_uniqueness_of(:username) }
  end

  describe ".authenticate" do
    subject { User.authenticate(@user.username, @user.password) }
    it "authenticates when the user exists" do
      @user = create(:user)
      expect(subject).to be_truthy
    end
    it "does not authenticate when the user is missing" do
      # build does not save the user to database
      @user = build(:user)
      expect(subject).to be_falsey
    end
  end
end

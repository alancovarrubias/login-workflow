require 'rails_helper'

RSpec.describe User, type: :model do
  it "Factory Bot is valid" do
    expect(build(:user)).to be_valid
  end

  describe "validations" do
    it { should validate_presence_of(:username) }
    it { should validate_uniqueness_of(:username) }
    it { should validate_presence_of(:password) }
  end
end
